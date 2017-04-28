Django CMS
##########

:id: inicio

.. note::
    Buenas a todos. Es fácil que muchos aquí hayáis venido tentados por la palabra CMS, sin haber tocado
    previamente Django. Para todos aquellos, haré una pequeña introducción.

----

:id: django

Django
======

Framework de desarrollo web.

(es decir, te toca picar código).


----

:id: django-programadores

Django permite a los PROGRAMADORES crear sitios web profesionales en muy poco tiempo.

(ayuda a programar webs a medida)

----

:id: django-magia

Pero... ¿y Django CMS? ¿Los CMS no eran "automágicos" y no necesitas programar nada?

.. image:: imgs/magic.gif

----

:id: cms-magia

Los **CMS** no son *magia*, sino **gestores de contenido** (Content Management System).

Pero ya llegaremos a eso...

----

:id: framework

Framework
=========
Y eso significa...

Herramientas unificadas y normas de trabajo para un correcto desarrollo.

(es decir, programar sin crear un frankenstein con snippets de Stack Overflow).

.. note::

    Django, como framework que es, es un conjunto de herramientas y normas de trabajo
    para el correcto desarrollo de un sitio web. - lo cual es bueno para los programadores

----

:id: framework-ventajas

Ventajas
--------

* Código más reutilizable.
* Código de mejor calidad.
* Software más seguro.
* Desarrollo más rápido.

----

:id: django-webs

Por tanto:

Django (y Django CMS) son una buena solución cuando necesitas una web profesional a medida.

Y algunos ejemplos son:

----

:id: django-webs-2

================================  =====================================  ================================
Nasa                              Washington Post                        Pinterest
.. image:: imgs/nasa.png          .. image:: imgs/washington-post.png    .. image:: imgs/pinterest.png
Firefox                           Disqus                                 Bitbucket
.. image:: imgs/firefox.png       .. image:: imgs/disqus.png             .. image:: imgs/bitbucket.png
================================  =====================================  ================================

----

:id: django-ofrece

Qué ofrece Django
=================

* Patrón Modelo-Vista-Controlador (MVC) con:

  * Sistema **ORM** propio.
  * Lenguaje de **plantillas** HTML propio.
  * **Vistas** (controlador)) genéricas POO.
  
* Sistema de **urls**.

----

:id: django-ofrece-2

* **Localización** (l10n) e **Internacionalización** (i18n)
* **Middleware**, que controla la entrada y salida.
* Sistema de **usuarios y permisos**.
* Medidas de **seguridad** integradas (XSS, CSRF, SQL Inj., clickjacking...).
* Panel de **administración** de datos.

----

:id: django-falta

Pero falta algo...
==================

.. note::
    No obstante, entre estas herramientas faltaba para algo que ya existía


----

:id: django-falta-cms

CMS
===

.. note::
    Herramientas para CMS. Y aquí es donde llega Django CMS.

----

:id: django-cms

Django CMS
==========

.. note::
    Django CMS. Completa a Django como framework con herramientas para la gestión de contenido.
    
----

:id: django-cms-respetuoso

Respetuoso con Django
=====================

.. note::
    Si con Django es posible crear apps en minutos, con Django CMS es posible añadirle gestión de
    contenido, con muy pocos cambios.
    
----

:id: django-cms-caracteristicas

Qué incluye Django CMS
======================

----

:id: djangocms-menus

Gestión y creación de páginas
-----------------------------

.. raw:: html

    <video loop data-for="djangocms-menus">
        <source src="resources/djangocms_menus.mkv" type="video/mp4">
    </video>


----

:id: djangocms-contenido


Borradores y publicación de contenido
-------------------------------------

.. raw:: html

    <video loop data-for="djangocms-contenido">
        <source src="resources/djangocms_contenido.mkv" type="video/mp4">
    </video>

----

:id: djangocms-undo

Sistema de versiones
--------------------

.. raw:: html

    <video loop data-for="djangocms-undo">
        <source src="resources/djangocms_undo.mkv" type="video/mp4">
    </video>

----

:id: djangocms-idiomas

Páginas en diferentes idiomas
-----------------------------

.. raw:: html

    <video loop data-for="djangocms-idiomas">
        <source src="resources/djangocms_idiomas.mkv" type="video/mp4">
    </video>

----

:id: djangocms-plugins

Uso de plugins
--------------

.. raw:: html

    <video loop data-for="djangocms-plugins">
        <source src="resources/djangocms_plugins.mkv" type="video/mp4">
    </video>

----

* *Contenido multiidioma* y condicionado por el mismo.
* Gestión de los *Apphooks* y los *plugins* (que hablaremos más adelante).

