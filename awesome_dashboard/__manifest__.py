# -*- coding: utf-8 -*-
{
    "name": "Awesome Dashboard",
    "summary": "Starting module",
    "description": "Starting module",
    "author": "Odoo",
    "website": "https://www.odoo.com/",
    "category": "Tutorials",
    "version": "0.1",
    "application": True,
    "installable": True,
    "depends": ["base", "web", "mail", "crm"],
    "data": [
        "views/views.xml",
    ],
    "i18n_extra": [
        "i18n/*.po",
    ],
    "assets": {
        "web.assets_backend": [
            "awesome_dashboard/static/src/**/*",
            ("remove", "awesome_dashboard/static/src/dashboard/**/*"),
        ],
        "awesome_dashboard.dashboard": ["awesome_dashboard/static/src/dashboard/**/*"],
    },
    "license": "AGPL-3",
}
