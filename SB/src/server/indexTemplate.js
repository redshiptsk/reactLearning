export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sb title</title>
    <script defer src="/static/client.js" type="application/javascript"></script>
    <script defer>
    window.__token__ = '${token}'
    </script>
</head>
<body>
    <div id="root">${content}</div>
    <div id="modal_root"></div>
    <div id="dropdown_root"></div>
</body>
</html>
`;