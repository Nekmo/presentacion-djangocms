.. title: DjangoCMS

:data-transition-duration: 500
:css: styles/presentacion.css
:css: styles/monokai.css

----

:id: inicio

.. image:: imgs/djangocms_logo.png

Sistema de CMS para Django

.. note::
    Buenas a todos. Es fácil que muchos aquí hayáis venido tentados por la palabra CMS, sin haber tocado
    previamente Django. Para todos aquellos, haré una pequeña introducción.

----

:id: django

.. image:: imgs/django_logo.png

**Framework de desarrollo web en Python.**

(es decir, te toca picar código).

.. note::
    Django es lo que se denomina un framework para el desarrollo web.

----

:id: django-programadores
:data-x: r0
:data-y: r1600

Para desarrolladores
--------------------

Django permite a los **PROGRAMADORES** crear sitios web profesionales en muy poco tiempo.

*(ayuda a programar webs a medida)*

.. note::

    Es decir, está orientado a la creación de nuevos sitios profesionales. Ofrece las
    herramientas para trabajar.

----

:id: django-magia
:data-x: r1600
:data-y: r0
:data-scale: 2

Pero... ¿y Django CMS? ¿Los CMS no eran *"automágicos"* y no necesitas programar nada?

.. image:: imgs/magic.gif

.. note::

    Ahora puede que algo os estéis preguntando. ¿Programar? ¿Pero los CMS no iban
    de crear sitios sin tener ni idea?

----

:id: cms-magia
:data-scale: 1
:data-rotate: 90
:data-x: r0
:data-y: r1600

Los **CMS** no son *magia*, sino **gestores de contenido**

(Content Management System).

*Pero ya llegaremos a eso...*

.. note::

    Aunque es común la confusión, en realidad CMS viene de Content Management System, o lo
    que es lo mismo, gestores de contenido.

----

:id: framework
:data-x: r1600
:data-y: r0

Framework
=========
Y eso significa...

**Herramientas unificadas y normas de trabajo para un correcto desarrollo.**

*(es decir, programar sin crear un frankenstein con snippets de Stack Overflow)*.

.. note::

    Volviendo a Django con los frameworks, un framework es un conjunto de herramientas
    unificadas y métodos de trabajo para el desarrollo.

----

:id: framework-ventajas
:data-x: r0
:data-y: r1600

Ventajas
--------

* Código más **reutilizable**.
* Código de mejor **calidad**.
* Software más **seguro**.
* Desarrollo más **rápido**.

.. note::

    Esto trae muchas ventajas, como las que tenéis aquí: ....

----

:id: django-webs
:data-x: r-1600


Por tanto:

Django *(y Django CMS)* son una buena solución cuando necesitas una web **profesional a medida**.

Y algunos ejemplos son:

.. note::
    Por tanto, Django, y Django CMS por ende, es una buena solución para crear webs desde cero. Y como muestra de su
    éxito, aquí tenéis algunos sitios que usan Django:

----

:id: django-webs-2
:data-x: r-1600
:data-y: r0

================================  =====================================  ================================
Nasa                              Washington Post                        Pinterest
.. image:: imgs/nasa.png          .. image:: imgs/washington-post.png    .. image:: imgs/pinterest.png
Firefox                           Disqus                                 Bitbucket
.. image:: imgs/firefox.png       .. image:: imgs/disqus.png             .. image:: imgs/bitbucket.png
================================  =====================================  ================================

----

:id: django-ofrece
:data-z: r3000

Qué ofrece Django
=================

* Patrón **Modelo-Vista-Controlador** (MVC) con:

  * Sistema **ORM** propio.
  * Lenguaje de **plantillas** HTML propio.
  * **Vistas** (controlador) genéricas POO.
  
* Sistema de **urls**.

.. note::

    Perdonad que me enrrolle, pero al ser Django CMS unos módulos para Django, debo
    seguir hablando de él. Al ser todas las características de Django también
    aplicables a Django CMS, repasaré brevemente *sus bondades*: ...

----

:id: django-ofrece-2
:data-x: r-1000
:data-z: r0

* **Localización** *(l10n)* e **Internacionalización** *(i18n)*
* **Middleware**, que controla la entrada y salida.
* Sistema de **usuarios y permisos**.
* Medidas de **seguridad** integradas *(XSS, CSRF, SQL Inj., clickjacking...)*.
* Panel de **administración** de datos.

----

:id: django-falta
:data-rotate: 0
:data-y: r3500
:data-z: 0

Pero falta algo...
==================

.. note::
    No obstante, entre estas herramientas falta algo.

----

:id: django-falta-cms
:data-x: r1600
:data-y: r0

CMS
===

.. note::
    Herramientas para CMS. Y aquí es donde llega Django CMS.

----

:id: django-cms
:data-x: r0
:data-y: r1000
:data-z: r1600
:data-rotate: 20
:data-scale: 3

Django CMS
==========

.. note::
    Django CMS. Completa a Django como framework con herramientas para la gestión de contenido.
    Como por ejemplo ...


----

:id: djangocms-usuario

:data-x: r3000
:data-y: r0
:data-z: 0
:data-rotate: 0
:data-scale: 1

.. raw:: html

    <video loop data-for="djangocms-usuario">
        <source src="resources/djangocms_usuario.mkv" type="video/mp4">
    </video>


----

:id: djangocms-admin

:data-x: r3000
:data-y: r0
:data-z: 0
:data-rotate: 0
:data-scale: 1

.. raw:: html

    <video loop data-for="djangocms-admin">
        <source src="resources/djangocms_admin.mkv" type="video/mp4">
    </video>


----

:id: menu
:data-x: r3000
:data-y: r0
:data-z: 0
:data-rotate: 0
:data-scale: 1

Menú
====

.. image:: imgs/menus.png

.. note:: Django CMS nos incluye un sistema para construir menús para nuestras apps. Con
    submenús y mucho más.

----

:id: bloques-plugins

Bloques para plugins
====================

(lo que en otros sistemas se denominan widgets)

.. image:: imgs/bloques-plugins.png

.. note:: En vez de widgets, como se llamarían en otros CMS, Django CMS tiene plugins. Éstos
    se colocan en secciones llamadas placeholders, que podremos poner donde queramos en
    nuestros diseños. Los plugins pueden añadirse, reordenarse y quitarse a voluntad.

----

:id: edicion-contenido

Edición de contenido
====================

.. raw:: html

    <video loop data-for="edicion-contenido">
        <source src="resources/djangocms_editar.mkv" type="video/mp4">
    </video>

.. note:: Poniendo el contenido en un bloque específico en el template, éste será modificable
    en modo administrador.

----

:id: por-que-django-cms
:data-x: r0
:data-y: r1600


Por qué
=======

Django CMS
----------

¿Y no otro CMS para Django, como *Wagtail* o *Mezzanine*?

----

:id: por-que-django-cms-2
:data-x: r2000
:data-y: r0
:data-rotate-y: r60

* Gran soporte para **internacionalización**.
* Muy **extensible** y **modular**.
* Aprovecha y **no sustituye** a Django.
* Más opciones de **personalización**.
* Es el más **popular** y con mejor **soporte**.

----

:id: django-cms-caracteristicas
:data-x: r0
:data-y: r1600
:data-rotate-y: 0

Qué incluye
===========

Django CMS
----------

----

:id: djangocms-menus
:data-x: r1600
:data-y: r0

Gestión y creación de páginas
-----------------------------

* Aquí es donde se puecen **crear, borrar y modificar** páginas.
* Las páginas pueden ser de **contenido** o **Apphooks** (ya hablaremos de ellos).
* La gestión de páginas determina qué será **visible** por los usuarios.
* También determina el orden y lo que aparece en **el menú**.

----

:id: djangocms-menus-2
:data-x: r0
:data-y: r1600

.. raw:: html

    <video loop data-for="djangocms-menus-2">
        <source src="resources/djangocms_menus.mkv" type="video/mp4">
    </video>

----

:id: djangocms-contenido
:data-x: r1600
:data-y: r-1600

Borradores y publicación de contenido
-------------------------------------

* Al editar una página, ésta queda como **borrador** hasta que la publicamos.
* Podemos dejar la página como borrador, y establecer una **fecha de publicación**.

----

:id: djangocms-contenido-2
:data-x: r0
:data-y: r1600

.. raw:: html

    <video loop data-for="djangocms-contenido-2">
        <source src="resources/djangocms_contenido.mkv" type="video/mp4">
    </video>

----

:id: djangocms-undo
:data-x: r1600
:data-y: r-1600

Sistema de versiones
--------------------

* Tras cualquier cambio, podemos ir a una **versión anterior** de la página.
* También es posible **revertir los cambios**.

----

:id: djangocms-undo-2
:data-x: r0
:data-y: r1600

.. raw:: html

    <video loop data-for="djangocms-undo-2">
        <source src="resources/djangocms_undo.mkv" type="video/mp4">
    </video>

----

:id: djangocms-idiomas
:data-x: r1600
:data-y: r-1600

Páginas en diferentes idiomas
-----------------------------

* Una página de contenido puede encontrarse en **tantos idiomas** como estén configurados.
* Es posible configurar el comportamiento si la **traducción no existe** *(404, redirección...)*.
* Para hacer una traducción, se crea una **nueva página** en el idioma, y se **copia el contenido** de otro idioma.

----

:id: djangocms-idiomas-2
:data-x: r0
:data-y: r1600

.. raw:: html

    <video loop data-for="djangocms-idiomas-2">
        <source src="resources/djangocms_idiomas.mkv" type="video/mp4">
    </video>


----

:id: djangocms-plugins
:data-x: r1600
:data-y: r-1600

Uso de plugins
--------------

* Los plugins son el equivalente a los **widgets** de otros sistemas.
* Se puede poner plugins en los espacios definidos por el usuario llamados **placeholders**.
* Es fácil **crear nuevos plugins**, y éstos pueden **interactuar** con el contenido de la página.
* Un plugin puede **contener otros plugins**. Por ejemplo, un plugin de panel de alerta contiene botones, texto...

----

:id: djangocms-plugins-2
:data-x: r0
:data-y: r1600

.. raw:: html

    <video loop data-for="djangocms-plugins-2">
        <source src="resources/djangocms_plugins.mkv" type="video/mp4">
    </video>

----

:id: djangocms-plugins-3
:data-x: r0
:data-y: r1600

Placeholder
===========
Permite definir dónde irán los plugins *(bloques, widgets)*.

.. code:: htmldjango

     <div id="content">
         {% placeholder "content" %}
     </div>
     <div id="sidebar">
         {% static_placeholder "sidebar" %}
     </div>

    ...
    <div id="footer">
        {% static_placeholder "footer" %}
    </div>


.. note::
    Los placeholder y placeholder_static permiten definir dónde irán los plugins en nuestra página. El argumento entregado define el identificador de placeholder, que permite reutilizarlos entre templates.

----

:id: djangocms-apphooks
:data-x: r1600
:data-y: r-3200


Uso de Apphooks
---------------

* Son **aplicaciones** preparadas para insertarse en el sitio por el usuario.
* Algunos ejemplos son aplicaciones de *blog*, *comunidad*, *ofertas de trabajo*...
* Es posible tener varias veces integrada **la misma app** en el mismo sitio.
* Los Apphooks se integran fácilmente en el menú, y pueden tener **submenús**.

----

:id: djangocms-apphooks-2
:data-x: r0
:data-y: r1600

.. raw:: html

    <video loop data-for="djangocms-apphooks-2">
        <source src="resources/djangocms_apphooks.mkv" type="video/mp4">
    </video>

----

:id: djangocms-apphooks-3
:data-x: r0
:data-y: r1600

Algunos ejemplos
----------------

* `Github:Aldryn/Newsblog <https://github.com/aldryn/aldryn-newsblog>`_
* `Github:Aldryn/Forms <https://github.com/aldryn/aldryn-forms>`_
* `Github:Aldryn/People <https://github.com/aldryn/aldryn-people>`_
* `Github:Aldryn/Jobs <https://github.com/aldryn/aldryn-jobs>`_
* `Github:Aldryn/Events <https://github.com/aldryn/aldryn-events>`_
* `Github:Aldryn/FAQ <https://github.com/aldryn/aldryn-faq>`_

----


:id: djangocms-wizard
:data-x: r1600
:data-y: r-1600

Wizard (crear página)
---------------------

* Permite **crear páginas** de contenido o de los diferentes AppHooks.
* Podemos hacer nuestros **propios wizard** para facilitar crear contenido.

----

:id: djangocms-wizard-2
:data-x: r0
:data-y: r1600

.. raw:: html

    <video loop data-for="djangocms-wizard-2">
        <source src="resources/djangocms_wizard.mkv" type="video/mp4">
    </video>

----

:id: djangocms-probar
:data-x: r-5000
:data-y: r0
:data-z: 3000
:data-rotate-y: 30
:data-scale: 3


Cómo probar Django CMS
======================

* Pruébalo en la demo: http://try.django-cms.org/
* Usa el cloud: https://www.divio.com/


----

:id: aldryn-feature-video
:data-x: r0
:data-y: r-4000

.. raw:: html

    <video loop data-for="aldryn-feature-video">
        <source src="resources/aldryn_feature_video.mp4" type="video/mp4">
    </video>


----

:id: django-cms-webs
:data-scale: 1

Quiénes confían en Django CMS...
================================

================================  =====================================  ================================  ===================================
.. image:: imgs/logos/nasa.png    .. image:: imgs/logos/natgeo.png       .. image:: imgs/logos/parrot.png  .. image:: imgs/logos/pbs.png
.. image:: imgs/logos/salt.png    .. image:: imgs/logos/men_expert.png   .. image:: imgs/logos/aamc.png    .. image:: imgs/logos/canonical.png
================================  =====================================  ================================  ===================================

----

:id: ejemplo-salt
:data-x: r1600
:data-y: r0
:data-z: 0
:data-rotate-y: 30

Ejemplo: Salt
=============

:id: django-cms-salt

.. image:: imgs/salt.png

----

:id: mas-ejemplos
:data-x: r0
:data-y: r1600


Más ejemplos en:
================

https://www.django-cms.org/en/case-studies/

----

:id: end
:data-x: r6000
:data-y: r-3000
:data-rotate: 270

¡Muchas gracias a todos!
========================

* **Sitio web:** http://nekmo.com
* **Email:** contacto@nekmo.com
* **Telegram:** @nekmo
* **Twitter:** @nekmocom

.. note::
    Muchas gracias. Por si queréis hablar conmigo, podéis hacerlo por estos medios, o luego al final.
