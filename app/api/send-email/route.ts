// import { NextResponse } from 'next/server';
// import { sendOrderConfirmationEmails } from '@/lib/emailService';

// export async function POST(request: Request) {
//   try {
//     const orderData = await request.json();
//     const result = await sendOrderConfirmationEmails(orderData);

//     if (!result.success) {
//       throw new Error('Failed to send emails');
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Error sending emails:', error);
//     return NextResponse.json(
//       { success: false, message: 'Failed to send confirmation emails' },
//       { status: 500 }
//     );
//   }
// }
