---
name: Hospedagem cPanel LiteSpeed
description: Site hospedado em cPanel com LiteSpeed, deploy manual da pasta dist
type: preference
---
- Servidor: cPanel com LiteSpeed
- Deploy: pasta `dist` copiada manualmente para o servidor
- Precisa de `.htaccess` na pasta `public/` para SPA routing funcionar
- O `.htaccess` é copiado para `dist/` no build automaticamente
