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

:id: convence-django


¿Os convence Django?
--------------------

.. image:: imgs/eyebrows.gif


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
    Por fin, ya empiezo con Django CMS. Perdonad la espera. Para introduciros, os enseño
    primero una web construida con Django CMS, desde el punto de vista del usuario.


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


.. note::
    Aquí podéis la portada, con secciones diferenciadas y contenido dinámico.
    También tenéis aplicaciones como blog, todas opcionales, y que tenéis que poner
    vosotros mismos. Como podéis ver hay widgets, o como llamamos nosotros, plugins
    a la derecha. También tenéis una App para eventos con un calendario, un FAQ,
    o un listado de personas, que son los que crean contenido y las entradas del blog.
    -- Ahora lo veremos desde el punto de vista del administrador.


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


.. note::
    Para acceder al modo admin, ponemos en la url el parámetro edit. Aparecerá arriba
    la opción para logearse. Pulsamos, y nos conectamos usando un usuario local. En modo
    admin, todos los elementos son editables. Aparecerá un tooltip avisándonos de ello
    y podemos editarlo con doble clicl . Los elementos dinámicos también son editables
    de esta misma forma como podéis ver. Los cambios no se aplican para los usuarios hasta
    que confirmamos. Incluso el menú de arriba es editable así. Si véis los elementos de
    la derecha, que son también plugins, podemos añadir otro más desde el apartado
    "structure". Añadiremos un calendario.


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

.. note::
    Vale. Hemos visto muchas cosas en este vistazo rápido. Ahora lo veremos con detalle,
    empezando por el menú. Si os fijáis, Django CMS incluye un menú, el cual puede tener
    incluso sub-elementos. Es editable desde Django CMS y podremos añadir nuestras propias
    páginas de contenido o aplicaciones a este menú. El menú puede ponerse donde se quiera
    en el template, incluso más de un menú.


----

:id: bloques-plugins

Bloques para plugins
====================

(lo que en otros sistemas se denominan widgets)

.. image:: imgs/bloques-plugins.png

.. note::
    En vez de widgets, como se llamarían en otros CMS, Django CMS tiene plugins. Éstos
    se colocan en secciones llamadas placeholders, que podremos poner donde queramos en
    nuestros templates. Los plugins pueden añadirse, reordenarse y quitarse a voluntad.

----

:id: edicion-contenido

Edición de contenido
====================

.. raw:: html

    <video loop data-for="edicion-contenido">
        <source src="resources/djangocms_editar.mkv" type="video/mp4">
    </video>

.. note::
    Como se ha visto antes, haciendo doble clic en un elemento, puede modificarse. El
    contenido que puede modificarse así, es el de los plugins, o de contenido de modelos
    de Django que hemos dicho previamente que es editable de esta forma.

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

.. note::
    Por ejemplo aquí estamos despublicando una página al público. Ahora estamos
    quitándola del menú, y como se puede ver, se  pueden reordenar o incluso agrupar.

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

.. note::
    En este caso añadiremos una nueva página de contenido y luego la editamos. Hasta que
    no confirmamos que queremos publicarla, los usuarios normales no podrán verla.

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

.. note::
    Ahora imaginemos que metemos la pata editando un contenido. Podremos revertir
    los cambios usando las fechas del panel superior, o incluso revertir los cambios.

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

.. note::
    Podemos configurar el comportamiento si la página de un idioma no está. En este caso, da un 404.
    Creamos la página en el idioma. Ahora, copiamos todo el contenido de la versión en inglés, y
    lo traducimos.

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

.. note::
    Podemos ver los plugins usados en esta página en la sección estructura. Añadimos un nuevo plugin,
    que es un row a 2 columnas de Bootstrap. Cambiamos su posición, y metemos dentro otro plugin, un
    panel de Bootstrap también, Metemos en el titular texto, y de contenido un botón. Añadimos en la
    otra columna un mapa. Decir, que todo el contenido en Django CMS, son plugins, y se añaden como
    tales.

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
    Los placeholder y placeholder_static permiten definir dónde irán los plugins en nuestra página.
    El argumento entregado define el identificador de placeholder, que permite reutilizarlos entre templates.

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

.. note::
    Aquí creamos una nueva página, que no será de contenido. Luego, tras crearla, vamos
    a sus parámetros avanzados y decimos que queremos que sea una App, en este caso de
    blog. Estas Apps pueden requerir de parámetros adicionales, pero yo los tengo ya
    hechos para ahorrar tiempo.

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

.. note::

    Para terminar, Django CMS incluye una forma de crear contenido fácil
    mediante asistentes. Aquí podéis ver los ya disponibles. Podéis crear los
    vuestros propios.

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

.. note::
    Este es un ejemplo de cómo funciona Divio Cloud. Aquí podéis crear vuestros
    proyectos y lanzarlos. Decir, que a mí no me pagan para esto.

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

----

:id: presentacion-url

Si os ha gustado, dadle una ★ en Github!
----------------------------------------

`Github:Nekmo/presentacion-djangocms <https://github.com/Nekmo/presentacion-djangocms>`_