// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   try {
//     // Récupérer les données de la commande
//     const orderData = await request.json();

//     // 1. Valider les données de la commande
//     // 2. Traiter le paiement (intégration avec un service de paiement)
//     // 3. Enregistrer la commande dans votre base de données

//     // Envoyer les emails de confirmation via l'API dédiée
//     const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(orderData),
//     });

//     const emailResult = await emailResponse.json();
//     if (!emailResult.success) {
//       console.warn('Failed to send confirmation emails, but order was processed');
//     }

//     return NextResponse.json({ success: true, message: 'Commande traitée avec succès' });
//   } catch (error) {
//     console.error('Erreur lors du traitement de la commande:', error);
//     return NextResponse.json(
//       { success: false, message: 'Une erreur est survenue lors du traitement de la commande' },
//       { status: 500 }
//     );
//   }
// }
