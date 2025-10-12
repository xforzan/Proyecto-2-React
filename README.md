# Proyecto 2 - React ⚛️

Bienvenid@s a **Proyecto 2 - React**, una proyecto desarrollado con **Node.js**, **Express**, **Vite**, **React** y **MongoDB**.  
Este proyecto sirve como base para aprender y practicar el desarrollo de aplicaciones full-stack modernas.

[![Made by Xforzan](https://img.shields.io/badge/Made%20by-Xforzan-blue)](https://github.com/xforzan)
![Version](https://img.shields.io/badge/Version-1.0.0-orange)
![Node.js](https://img.shields.io/badge/Node.js-22.x-brightgreen)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-lightgreen)

---

## ✨ Características

- 🌐 **API RESTful** con rutas organizadas
- 🗄️ **MongoDB + Mongoose** para manejo de base de datos
- 🔐 **Autenticación con JWT** lista para implementar
- 📦 **Estructura modular** y fácil de escalar


---

## 📂 Estructura del Proyecto

---

## 🚀 Instalación y Uso

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/xforzan/Proyecto-2-React.git
```
### 2️⃣ Entra al proyecto
```bash
cd Proyecto-2-React/
```

### 3️⃣ Instalar las dependencias del cliente y del servidor
```bash
npm run install:all
```
### 4️⃣ Configurar archivo `.dev` dentro de la carpeta server con las variables
```bash
DB_URL
JWT_SECRET
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_SECRET
CLOUDINARY_API_KEY
```
## ▶️ Ejecución del proyecto
### Modo desarrollo (ejecuta cliente y servidor)
```bash
npm run dev
```
#### La API se ejecutará en:
👉 `http://localhost:3000`

#### La página se ejecutará en:
👉 `http://localhost:5173/`

## 📚 Modelos de datos
### 👤 Usuario
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456",
  "avatar": "url_cloudinary",
}
```

## 📚 Endpoints principales
### 🛡️ Autenticación 

`POST /api/v1/auth/login` → Iniciar sesión

`POST /api/v1/auth/register` → Registrarse

`POST /api/v1/auth/verify` → Verifica si el usuario se ha loggeado o no

`POST /api/v1/auth/logout` → Cierra la sesión del usuario

### 👤 Usuarios

`GET /api/v1/users/me` → Obtener información del usuario

`POST /api/v1/users/avatar` → Cambia el avatar del usuario

`DELETE /api/v1/users/me` → Eliminar el usuario


## 🗑️ Eliminación de cuentas

- Un usuario puede eliminar su propia cuenta.

## 🖼️ Campo de imagen

- Cada usuario tiene un campo image.

- Hay una imagen por defecto al crear la cuenta, esta se puede cambiar desde el equipo mediante Cloudinary.

- Al eliminar un usuario, también se elimina su imagen en Cloudinary.


## 📜 Licencia

- Este proyecto está bajo la licencia MIT.
- Puedes usarlo, modificarlo y distribuirlo libremente.

<div align="center">

💻 Desarrollado como Proyecto 2 - React
Con ❤️ para aprender y crecer🚀

</div>

