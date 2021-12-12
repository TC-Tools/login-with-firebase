import { NextResponse } from 'next/server'

export function middleware(req, res) {
    return NextResponse.redirect('/')
}