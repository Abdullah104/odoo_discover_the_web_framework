# -*- coding: utf-8 -*-
{
    "name": "Shelter",
    "summary": """
        Companion addon for the Odoo Smartclass 2024 on the JS Framework
    """,
    "description": """
        Companion addon for the Odoo Smartclass 2024 on the JS Framework
    """,
    "author": "Odoo",
    "website": "https://www.odoo.com/",
    "category": "Tutorials",
    "version": "0.1",
    "application": True,
    "installable": True,
    "depends": ["base", "web", "contacts"],
    "data": [
        "views/views.xml",
        "security/ir.model.access.csv",
    ],
    "assets": {
        "web.assets_backend": [
            "shelter/static/src/**/*",
        ],
    },
    "license": "AGPL-3",
}
