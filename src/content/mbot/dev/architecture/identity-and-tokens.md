---
---
# Klubbidentitet och tokens

## Översikt
Klubb är ett första-klassens domänobjekt. Klienten representerar klubben, inte individen.

## Bootstrap och drift
En rimlig modell är:

- bootstrap/enrollment för installation
- utfärdade klientcredentials bundna till klubb
- access tokens med rotation och grace-period

## Grace-period
Grace-period används för att undvika onödiga driftstopp vid tillfälliga rotationsproblem.
Detta ska kombineras med tydlig varning och operativ uppföljning.

## Avgränsning
Individidentitet hålls i Outlook-flödet; MBot använder klubbidentitet för systemåtkomst.


## Se även

- [Tokenmodell och nyckellivscykel](../tokenmodell/)
