import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, employees, message } = body;

    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const lead = {
      id: Date.now(),
      name,
      email,
      company,
      phone: phone || '',
      employees: employees || '',
      message: message || '',
      createdAt: new Date().toISOString(),
    };

    const dbPath = path.join(process.cwd(), 'leads.json');
    let leads = [];

    if (fs.existsSync(dbPath)) {
      const raw = fs.readFileSync(dbPath, 'utf-8');
      leads = JSON.parse(raw);
    }

    leads.push(lead);
    fs.writeFileSync(dbPath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true, message: 'Lead captured successfully', id: lead.id }, { status: 201 });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const dbPath = path.join(process.cwd(), 'leads.json');
    if (!fs.existsSync(dbPath)) {
      return NextResponse.json({ leads: [] });
    }
    const raw = fs.readFileSync(dbPath, 'utf-8');
    const leads = JSON.parse(raw);
    return NextResponse.json({ leads, total: leads.length });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}
