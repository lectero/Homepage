# Tokenmodell och nyckellivscykel

Denna sida beskriver en föreslagen tokenmodell för HMB Mailbot när flera klubbar och flera servrar används.

## Principer

- Klienten representerar klubben, inte en individ.
- Bootstrap-nycklar används endast vid installation.
- Drift sker med kortlivade access tokens som kan förnyas.
- Grace-period används för att undvika onödiga stopp vid tillfälliga rotationsproblem.
- Tokens måste kunna valideras oavsett servernod vid multi-server.

## Trestegsmodell

1. Enrollment token (kortlivad)
2. Klubb- eller klientcredentials (långlivade, roterbara)
3. Access token (kortlivad)

## Grace-period

Grace-period innebär att systemet tolererar förnyelseproblem under en begränsad tid.
Det ska kombineras med tydlig varning och operativ uppföljning, samt styras av fel-taxonomin.

## Avgränsning

- Ingen individinloggning i klienten.
- Ingen “kommandomail”-autentisering.
