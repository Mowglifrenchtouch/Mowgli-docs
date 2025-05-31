---
title: "🧰 Matériel requis"
nav_order: 2
parent: "🏠 Guide OpenMower"
layout: default
permalink: /docs/Guide-OpenMower-Mowgli/materiel-requis/
---

# 🧰 Matériel requis

![Illustration matériel requis](/img/illustration-materiel.png)

Ce projet repose sur l’utilisation de la carte mère **d’origine** des modèles **Yardforce 500 / 500B**, sans modification matérielle profonde de celle-ci. Voici le matériel que j’ai personnellement utilisé, testé et validé pour réaliser mon robot tondeuse autonome.

---

### 🔧 Électronique principale

| Équipement | Références / Liens utiles | Remarques |
|-----------|----------------------------|-----------|
| 🧠 **Raspberry Pi 4** | [Kubii](https://www.kubii.com/fr/370-raspberry-pi-4-pi-400/)<br/>[Amazon](https://amzn.eu/d/hwgFRWU) | Pi 4 conseillé pour les performances |
| ⚡ **Module d'alimentation LM2596S** | [Amazon](https://amzn.eu/d/jhNev6j)<br/>[AliExpress](https://fr.aliexpress.com/item/32991657981.html)<br/>[Conrad](https://www.conrad.fr/) | Pour convertir le 24V en 5V |
| 🔗 **ST-Link V2 (pour le firmware)** | [Amazon](https://www.amazon.fr/)<br/>[AliExpress](https://fr.aliexpress.com/)<br/>[Kubii](https://www.kubii.fr/) | Pour flasher la carte STM32 |

### 📡 GPS et connectique

| Équipement | Références / Liens utiles | Remarques |
|-----------|----------------------------|-----------|
| 📡 **GPS RTK F9P (Ardusimple)** | [Ardusimple](https://fr.ardusimple.com/product/simplertk2b/?attribute_pa_header-options=without-headers)<br/>[AliExpress](https://fr.aliexpress.com/item/1005004690761874.html)<br/>[Tindie](https://www.tindie.com/) | Indispensable pour précision centimétrique |
| 📶 **Antenne GNSS (BT560 ou BT603)** | [AliExpress BT560](https://fr.aliexpress.com/item/32991527632.html)<br/>[AliExpress BT603](https://fr.aliexpress.com/item/32991527632.html) | La BT603 est plus puissante |
| 📶 **Antenne GNSS HA901A** | [AliExpress](https://www.aliexpress.com/)<br/>[Amazon](https://www.amazon.fr/) | Alternative compacte et performante |
| 🔌 **Câble d'antenne SMA** | [AliExpress](https://fr.aliexpress.com/item/1005004690761874.html)<br/>[Amazon](https://www.amazon.fr/) | Pour connecter le GPS à l’antenne |

### 📟 Capteurs, câbles et connectique

| Équipement | Références / Liens utiles | Remarques |
|-----------|----------------------------|-----------|
| 📦 **Câbles Dupont (M-M, M-F)** | [Amazon](https://www.amazon.fr/)<br/>[AliExpress](https://www.aliexpress.com/) | Pour connecter les composants au GPIO |
| 🔌 **Fils HY2.0 - 20cm (4P à 9P)** | — | Câblage rapide et propre pour le GPS ou connecteurs STM32 |
| 🎯 **IMU MPU6050 / BNO055 / QMC5883L** | [AliExpress](https://fr.aliexpress.com/)<br/>[Amazon](https://www.amazon.fr/) | Pour détecter l’inclinaison, les mouvements et le cap |
| 🔌 **Convertisseur de niveau logique** | [AliExpress](https://fr.aliexpress.com/)<br/>[Amazon](https://www.amazon.fr/) | Utile pour interfacer des signaux 3.3V et 5V |

### 🖥️ Logiciels utiles

| Équipement | Références / Liens utiles | Remarques |
|-----------|----------------------------|-----------|
| 🖥️ **Mobaxterm (SSH)** | [Mobaxterm](https://mobaxterm.mobatek.net/download-home-edition.html)<br/>[Pi Connect](https://connect.raspberrypi.com) | Pour piloter le Raspberry Pi |

---

<div class="alert alert--warning">
  <div class="alert-title">💡 Recommandation</div>
  N'oubliez pas de prévoir un accès Wi-Fi **stable sur toute la surface de tonte**. OpenMower Mowgli a besoin de rester connecté en permanence au réseau local pour fonctionner correctement.
</div>

---

<h2 id="impressions-3d">🖨️ Pièces imprimées en 3D personnalisées</h2>

Des pièces **sur mesure** (support RPi, support F9P, roues lestables, gyrophare, etc.) ont été **spécialement conçues** pour ce projet.

Elles sont disponibles **gratuitement** sur mon profil MakerWorld :

👉 [Profil MakerWorld Juditech3D](https://makerworld.com/en/@juditech3d)

📦 [Voir la section Impressions 3D](/docs/Guide-OpenMower-Mowgli/impression-3d/)

---

<h2 id="schema-cablage">🖼️ Schéma de câblage</h2>

Voici un aperçu du câblage complet du robot Mowgli, réalisé sur la base du schéma de <a href="https://github.com/cedbossneo/mowgli-docker" target="_blank">cedbossneo</a>, que j’ai **adapté pour plus de clarté** :

![Schéma de câblage Mowgli](/img/yardforce_wiring2.drawio.png)

> ✅ Ce schéma est également modifiable au format `.drawio` dans la page dédiée : [Voir le schéma interactif](/docs/Guide-OpenMower-Mowgli/schema-de-cablage/)

---

<div class="alert alert--success">
  <div class="alert-title">🧠 Astuce</div>
  Si vous n’avez pas d’imprimante 3D, je peux vous imprimer les pièces nécessaires à votre projet. Contactez-moi sur <a href="https://t.me/+mOlwROGsP3AyYTlk" target="_blank">Telegram</a> ou <a href="mailto:juditech3d@gmail.com">par email</a>.
</div>
