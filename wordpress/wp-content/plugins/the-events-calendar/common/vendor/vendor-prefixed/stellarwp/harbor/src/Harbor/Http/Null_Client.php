<?php declare( strict_types=1 );

namespace TEC\Common\LiquidWeb\Harbor\Http;

use TEC\Common\Psr\Http\Client\ClientInterface;
use TEC\Common\Psr\Http\Message\RequestInterface;
use TEC\Common\Psr\Http\Message\ResponseInterface;
use TEC\Common\Nyholm\Psr7\Response;
use TEC\Common\LiquidWeb\Harbor\Portal\Error_Code;

/**
 * Null client implementation of the PSR-18 HTTP client.
 *
 * @since 1.1.0
 */
final class Null_Client implements ClientInterface {
	/**
	 * Sends a PSR-7 request and returns a PSR-7 response.
	 *
	 * @since 1.1.0
	 *
	 * @param RequestInterface $request The request to send.
	 *
	 * @return ResponseInterface The response.
	 */
	public function sendRequest( RequestInterface $request ): ResponseInterface {
		return new Response(
			500,
			[],
			'',
			'1.1',
			Error_Code::API_COMMUNICATIONS_NOT_PERMITTED
		);
	}
}
