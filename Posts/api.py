from rest_framework.response import StreamingHttpResponse, Response
from rest_framework.views import APIView

class CrawlerApi(APIView):
	def get_blogs(self, tags):
		for i in range(10):
			yield

	def post(self, request, tag):
		return StreamingHttpResponse(get_blogs)