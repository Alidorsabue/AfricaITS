# Configuration EmailJS

## Étapes pour configurer EmailJS

### 1. Créer un compte EmailJS
1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit (100 emails/mois gratuits)
3. Connectez-vous à votre compte

### 2. Configurer un service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. **Notez le Service ID** (ex: `service_xxxxxxx`)

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. **IMPORTANT - Configurer le destinataire :**
   - Dans le champ "To Email", entrez : `alidorsabue@africaits.com`
   - OU utilisez `{{to_email}}` si vous voulez le passer en paramètre
4. Utilisez ce template :

**Subject:**
```
Nouveau message depuis le site AITS - {{subject}}
```

**Content:**
```
Bonjour,

Vous avez reçu un nouveau message depuis le formulaire de contact du site AITS.

Détails du contact:
- Nom: {{from_name}}
- Email: {{from_email}}
- Téléphone: {{phone}}
- Sujet: {{subject}}

Message:
{{message}}

---
Cet email a été envoyé depuis le formulaire de contact du site web AITS.
```

5. **Notez le Template ID** (ex: `template_xxxxxxx`)

**⚠️ IMPORTANT :** Assurez-vous que le champ "To Email" dans votre template contient bien `alidorsabue@africaits.com` ou `{{to_email}}`. C'est la cause de l'erreur "The recipients address is empty" si ce champ est vide.

### 4. Obtenir votre clé publique
1. Allez dans "Account" > "General"
2. Trouvez votre "Public Key" (ex: `xxxxxxxxxxxxx`)
3. **Notez cette clé**

### 5. Configurer le code
Ouvrez le fichier `src/pages/Contact.jsx` et remplacez les valeurs suivantes aux lignes 6-8 :

```javascript
const EMAILJS_SERVICE_ID = 'VOTRE_SERVICE_ID'; // Remplacez par votre Service ID
const EMAILJS_TEMPLATE_ID = 'VOTRE_TEMPLATE_ID'; // Remplacez par votre Template ID
const EMAILJS_PUBLIC_KEY = 'VOTRE_PUBLIC_KEY'; // Remplacez par votre Public Key
```

### 6. Tester
1. Remplissez le formulaire de contact sur votre site
2. Envoyez un message de test
3. Vérifiez que l'email arrive bien à `alidorsabue@africaits.com`

## Notes importantes
- L'email de destination est configuré dans le code : `alidorsabue@africaits.com`
- Le plan gratuit d'EmailJS permet 200 emails/mois
- Les clés sont publiques mais sécurisées par EmailJS
- Vous pouvez tester en mode développement sans problème

## Support
Si vous rencontrez des problèmes :
- Vérifiez que tous les IDs sont corrects
- Vérifiez que votre service email est bien connecté
- Consultez la documentation EmailJS : https://www.emailjs.com/docs/

