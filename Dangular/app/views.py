from django.shortcuts import render
from django.views.generic import TemplateView
class HomeTemplateView(TemplateView):
    need_login = True
    template_name = 'inicio.html'

    def get_context_data(self, **kwargs):
        context = super(HomeTemplateView, self).get_context_data(**kwargs)
        return context
