"""import re
from django.http import HttpResponsePermanentRedirect
from django.conf import settings


class HttpBaseUrlMiddleware(object):
    def process_request(self, request):
        host = request.META['HTTP_HOST'] #+ request.META['PATH_INFO']
        print "Host is "
        print host
        print request.get_full_path()
        for url_pattern, redirect_url in settings.URL_REDIRECTS:
            regex = re.compile(url_pattern)
            if regex.match(host):
                return HttpResponsePermanentRedirect(redirect_url + request.get_full_path())

        domain = settings.MY_HTTP_HOST_DOMAIN
        print "The domain is "
        print domain
        if request.META['HTTP_HOST'] != domain:
            target = 'http%s://%s%s' % (
                #request.is_secure() and 's' or '',
                ''
                domain,
                request.get_full_path())
            print "Target is "
            print target
            return HttpResponsePermanentRedirect(target)
"""
