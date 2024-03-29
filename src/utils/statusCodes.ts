const statusCodes = {
  100: "CONTINUE",
  101: "SWITCHING_PROTOCOLS",
  200: "OK",
  201: "CREATED",
  202: "ACCEPTED",
  204: "NO_CONTENT",
  206: "PARTIAL_CONTENT",
  300: "MULTIPLE_CHOICES",
  301: "MOVED_PERMANENTLY",
  302: "FOUND",
  304: "NOT_MODIFIED",
  307: "TEMPORARY_REDIRECT",
  400: "BAD_REQUEST",
  401: "UNAUTHORIZED",
  403: "FORBIDDEN",
  404: "NOT_FOUND",
  405: "METHOD_NOT_ALLOWED",
  406: "NOT_ACCEPTABLE",
  408: "REQUEST_TIMEOUT",
  409: "CONFLICT",
  410: "GONE",
  411: "LENGTH_REQUIRED",
  412: "PRECONDITION_FAILED",
  413: "PAYLOAD_TOO_LARGE",
  414: "URI_TOO_LONG",
  415: "UNSUPPORTED_MEDIA_TYPE",
  416: "RANGE_NOT_SATISFIABLE",
  417: "EXPECTATION_FAILED",
  426: "UPGRADE_REQUIRED",
  500: "INTERNAL_SERVER_ERROR",
  501: "NOT_IMPLEMENTED",
  502: "BAD_GATEWAY",
  503: "SERVICE_UNAVAILABLE",
  504: "GATEWAY_TIMEOUT",
  505: "HTTP_VERSION_NOT_SUPPORTED",
};

export default statusCodes;
