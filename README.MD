## Para poder ver las notificaciones locales (push)
Al momento de generar la app en android studio, dentro de la carpeta de
android/app/src/main/AndroidManifest.xml es necesario agregar el siguiente permiso:

```<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />```