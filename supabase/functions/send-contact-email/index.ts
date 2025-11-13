const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const payload = await req.json();
    const { name, email, message } = payload;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const contactMessage: ContactMessage = { name, email, message };

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #06b6d4; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background-color: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; }
    .field { margin: 15px 0; padding: 10px; background-color: white; border-left: 4px solid #06b6d4; }
    .label { font-weight: bold; color: #06b6d4; display: block; margin-bottom: 5px; font-size: 14px; }
    .value { color: #374151; white-space: pre-wrap; word-wrap: break-word; }
    .footer { font-size: 12px; color: #999; margin-top: 20px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Nuevo mensaje de contacto - Imgrafic</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Nombre:</span>
        <span class="value">${escapeHtml(contactMessage.name)}</span>
      </div>
      <div class="field">
        <span class="label">Email del remitente:</span>
        <span class="value">${escapeHtml(contactMessage.email)}</span>
      </div>
      <div class="field">
        <span class="label">Mensaje:</span>
        <span class="value">${escapeHtml(contactMessage.message)}</span>
      </div>
    </div>
    <div class="footer">
      <p>Este mensaje fue enviado a traves del formulario de contacto de Imgrafic</p>
    </div>
  </div>
</body>
</html>
    `;

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not configured');
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Imgrafic <onboarding@resend.dev>',
        to: 'alvaro-perez-aguilar@hotmail.com',
        subject: `Nuevo mensaje de contacto de ${contactMessage.name}`,
        html: htmlContent,
      }),
    });

    const emailData = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error('Resend API error:', emailData);
      throw new Error(`Failed to send email: ${emailData.message}`);
    }

    return new Response(
      JSON.stringify({ success: true, messageId: emailData.id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Error al enviar el mensaje' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});