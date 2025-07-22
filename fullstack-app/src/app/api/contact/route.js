import { NextResponse } from "next/server";
import { prisma } from "../lib/prisma.js";

export async function POST(req) {
  const data = await req.json();


  try {
    const response = await prisma.contact.create({
      data: {
        civilite: data.civilite,
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        telephone: data.telephone,
        dispos: data.dispos || [],
        motif: data.motif || "",
        message: data.message || "",
        createdAt: new Date(),
      }
    });
    console.log(response)
    return NextResponse.json({ status: "Demande enregistrée en base" });
  } catch (e) {
    return NextResponse.json({ status: "Erreur", error: e.message }, { status: 500 });
  }
}