
from __future__ import unicode_literals
from future.builtins import str

from collections import defaultdict

from django.core.exceptions import ImproperlyConfigured
from django.template import Context, TemplateSyntaxError, Variable
from django.template.loader import get_template
from django.utils.translation import ugettext_lazy as _

from mezzanine.pages.models import Page
from mezzanine.utils.urls import home_slug
from mezzanine import template
register = template.Library()


@register.assignment_tag
def to_list(*args):
    # Flatten the list and return it
    result = []

    for i in args:
        if isinstance(i, list):
            for j in i:
                result.append(j)
        else:
            result.append(i)
    return result


@register.assignment_tag
def get_recent_projects(num=-1):
    published = Page.objects.published()
    results = []
    for page in published.order_by('-publish_date'):
        page_title = page.meta_title()
        if 'Projects' in page_title and page_title.count("/") > 1:
            results.append(page)
    if num > 0:
        return results[:num]
    else:
        return results

@register.assignment_tag
def get_project_list():
    published = Page.objects.published()
    results = []
    for page in published.order_by('-publish_date'):
        page_title = page.meta_title()
        if 'Projects' in page_title and page_title.count("/") > 1:
            results.append(page)
    return results

@register.assignment_tag
def make_html_id(*args):
    for page in args:
        html_id = page.meta_title().lower()
        html_id = html_id.replace(' ', '-')
        html_id = html_id.replace('-/', '')
        return html_id
