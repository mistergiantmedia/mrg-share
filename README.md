
Step 3: Configure Port Settings

Click Advanced Settings
Go to Port Settings tab
Set:

Local Port: 3000
Container Port: 3000
Type: TCP



Step 4: Configure Volume Settings

Go to Volume tab
Click Add Folder
First volume:

Folder: Browse to /docker/pingvin
Mount path:

/opt/app/backend/data


Click Add Folder again
Second volume:

Folder: Browse to /docker/pingvin (create a public subfolder if needed)

Mount path:

/opt/app/frontend/public/img





---

Pingvin Share is a self-hosted file sharing platform and an alternative for WeTransfer.

## ✨ Features

- Share files using a link
- Unlimited file size (restricted only by disk space)
- Set an expiration date for shares
- Secure shares with visitor limits and passwords
- Email recipients
- Reverse shares
- OIDC and LDAP authentication
- Integration with ClamAV for security scans
- Different file providers: local storage and S3

## 🐧 Get to know Pingvin Share

- [Demo](https://pingvin-share.dev.eliasschneider.com)
- [Review by DB Tech](https://www.youtube.com/watch?v=rWwNeZCOPJA)

<img src="https://user-images.githubusercontent.com/58886915/225038319-b2ef742c-3a74-4eb6-9689-4207a36842a4.png" width="700"/>

## ⌨️ Setup

### Installation with Docker (recommended)

1. Download the `docker-compose.yml` file
2. Run `docker compose up -d`

The website is now listening on `http://localhost:3000`, have fun with Pingvin Share 🐧!

> [!TIP]
> Checkout [Pocket ID](https://github.com/stonith404/pocket-id), a user-friendly OIDC provider that lets you easily log in to services like Pingvin Share using Passkeys.

## 📚 Documentation

For more installation options and advanced configurations, please refer to the [documentation](https://stonith404.github.io/pingvin-share).

## 🖤 Contribute

We would love it if you want to help make Pingvin Share better! You can either [help to translate](https://stonith404.github.io/pingvin-share/help-out/translate) Pingvin Share or [contribute to the codebase](https://stonith404.github.io/pingvin-share/help-out/contribute).
