---
title: "🤝 Aide à la contribution"
nav_order: 100
permalink: /docs/Guide-OpenMower-Mowgli/aide-contribution/
layout: default
parent: "🏠 Guide OpenMower"
---

# 🤝 Aide à la contribution

![Illustration aide contribution](/img/contribution-guide.png)

Merci de votre intérêt pour l'amélioration de ce guide ! Que vous soyez utilisateur, développeur ou simple curieux, chaque contribution est la bienvenue 💡

---

## 🧰 Que pouvez-vous améliorer ?

Voici quelques exemples de contributions possibles :

- ✅ Corriger des fautes ou reformuler une explication
- 🗭 Proposer une amélioration sur une étape
- 📸 Ajouter une photo ou une capture d'écran
- 🧪 Ajouter des précisions sur un bug ou une astuce
- 🔧 Documenter une configuration ou un composant alternatif

---

## 🛠️ Comment contribuer ?

### 🔹 Méthode 1 : Depuis GitHub (rapide)

1. Rendez-vous sur la page du guide sur [GitHub](https://github.com/juditech3D/Mowgli-docs)
2. Naviguez dans le dossier `docs/Guide-OpenMower-Mowgli/`
3. Cliquez sur le fichier que vous souhaitez modifier
4. Cliquez sur ✏️ `Edit this file`
5. Proposez vos modifications, puis cliquez sur `Propose changes`
6. Créez un `Pull Request`

✅ Cette méthode est idéale pour les fautes ou petites améliorations rapides.

---

### 🔹 Méthode 2 : Cloner et éditer en local

Si vous êtes à l’aise avec Git, vous pouvez cloner le dépôt, faire vos modifications, puis envoyer une Pull Request.

```bash
git clone https://github.com/juditech3D/Mowgli-docs.git
cd Mowgli-docs
npm install
npm start
```

- Éditez les fichiers `.md` dans `docs/Guide-OpenMower-Mowgli/`
- Testez vos modifications localement
- Puis envoyez un Pull Request sur GitHub

---

## 🗓️ Conseils pour vos modifications

- Soyez clair et concis ✅
- Testez l'étape que vous modifiez 🧪
- Privilégiez des phrases simples (niveau débutant)
- N’hésitez pas à illustrer avec des images `static/img/`

---

## 💬 Besoin d’aide ?

Rejoignez la communauté Telegram : [@OpenMower_FR](https://t.me/c/1744099999/1)

Vous pourrez poser vos questions, discuter des contributions ou proposer des idées !

---

Merci pour votre aide 🙏
Chaque contribution rend ce guide plus utile pour tous les utilisateurs 🚀

---

## 💬 Exemple de blocs

<div class="alert alert--success">
  <div class="alert-title">🔠 Astuce</div>
  Si vous n’avez pas d’imprimante 3D, je peux vous imprimer les pièces nécessaires à votre projet.
</div>

### ▶️ 1. Ajouter une vidéo YouTube (recommandé)

Utilisez une balise HTML `<iframe>` dans votre fichier `.md` :

```html
<div style="text-align: center;">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/ID_DE_LA_VIDEO"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>
```

Remplacez `ID_DE_LA_VIDEO` par l'identifiant à la fin de l'URL YouTube :

URL : https://www.youtube.com/watch?v=ABC123XYZ  
ID : `ABC123XYZ`

---

### ▶️ 2. Ajouter une vidéo locale

Vous pouvez aussi intégrer une vidéo placée dans `static/videos/` :

```html
<video width="640" height="360" controls style="display: block; margin: auto;">
  <source src="/videos/mavideo.mp4" type="video/mp4" />
  Votre navigateur ne supporte pas la balise vidéo.
</video>
```

🔧 Emplacement attendu :
Placez votre fichier `.mp4` dans `static/videos/`

Puis utilisez le lien `/videos/mavideo.mp4`
