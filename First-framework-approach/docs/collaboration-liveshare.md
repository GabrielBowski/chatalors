# 🤝 Collaboration avec Live Share

## Configuration de Live Share

### 1. Hôte (celui qui crée la session)

1. Ouvrir VS Code avec le projet
2. Installer l'extension **Live Share** si ce n'est pas déjà fait
3. Cliquer sur l'icône **"Live Share"** dans la barre latérale gauche
4. Cliquer sur **"Share"** (Partager)
5. **Copier le lien** et l'envoyer aux autres membres du groupe

### 2. Participants

1. Ouvrir le lien reçu dans VS Code
2. Accepter l'invitation
3. Vous verrez le curseur des autres membres en temps réel ✨

## 📋 Répartition des tâches

⚠️ **IMPORTANT** : Pour éviter les conflits, **chaque personne travaille sur ses propres fichiers**.

### Option 1 : Binôme (2 personnes)

**Personne A** :

- `index.html` (structure HTML principale)
- `styles/utils/_variables.css` (couleurs, typos, espaces - **à faire ensemble**)
- `styles/base/_reset.css` et `_typography.css`
- `styles/components/_header.css` et `_footer.css`

**Personne B** :

- `styles/layout/_grid.css` et `_layout.css`
- `styles/components/_buttons.css`
- `styles/components/_cards.css`
- Autres composants selon la maquette

> 💡 **Astuce** : Commencez par remplir `_variables.css` ensemble avant de vous répartir les composants !

### Option 2 : Trinôme (3 personnes)

**Personne A** :

- `index.html` (structure HTML principale)
- `styles/utils/_variables.css` (couleurs, typos, espaces - **à faire ensemble**)
- `styles/base/_reset.css` et `_typography.css`

**Personne B** :

- `styles/layout/_grid.css` et `_layout.css`
- `styles/components/_header.css` et `_footer.css`
- `styles/components/_buttons.css`

**Personne C** :

- `styles/components/_cards.css`
- Autres composants selon la maquette (formulaires, modales, sections spécifiques)
- `pages/exemple-page.html` (si plusieurs pages)

> 💡 **Astuce** : Adaptez cette répartition selon les composants présents dans votre maquette !

## ✅ Bonnes pratiques de collaboration

### À FAIRE

- ✅ **Communiquer avant de modifier un fichier** : "Je vais travailler sur `_buttons.css`"
- ✅ Utiliser le **chat Live Share** (icône message en bas) pour coordonner
- ✅ Vérifier que personne d'autre n'est en train d'éditer votre fichier (curseurs visibles)
- ✅ **Sauvegarder régulièrement** (`Ctrl+S` / `Cmd+S`)
- ✅ Ajouter votre nom dans les commentaires :

```css
/* 
  Composant Button
  Auteur : Prénom
  Date : 2026-01-XX
*/
```

### À ÉVITER

- ❌ Modifier le même fichier en même temps qu'un autre
- ❌ Toucher aux fichiers des autres sans demander
- ❌ Modifier `_variables.css` sans prévenir (tout le monde en dépend !)

## 🔧 Gestion des conflits

Si deux personnes modifient le même fichier en même temps :

- Live Share affichera les deux versions côte à côte
- **Discutez** pour décider quelle version garder
- Ou **fusionnez manuellement** les deux versions

## 🎨 Partage du navigateur (optionnel)

Live Share permet aussi de partager votre navigateur pour voir le résultat en temps réel :

1. Cliquer sur l'icône **"Share Server"** dans la barre Live Share
2. Sélectionner le port de votre serveur local (généralement 5500 pour Live Server)
3. Les autres pourront voir votre navigateur et cliquer dessus

## 📝 Notes importantes

- Live Share nécessite une **connexion internet stable**
- Tous les participants doivent avoir **VS Code** installé
- Le projet doit être ouvert dans le **même dossier** pour que les chemins fonctionnent
