from django.http import StreamingHttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView

class CrawlerApi(APIView):
	def get_blogs(self):
		for i in range(10):
			yield "Hello"

	def post(self, request, tag):
		self.tag = tag
		return Response("HI")
		# return StreamingHttpResponse(get_blogs)