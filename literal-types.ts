function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
	return 1;
}

// либо можно написать alias
type httpMethod = 'post' | 'get';

function fetchWithAuth2(url: string, method: httpMethod): 1 | -1 {
	return 1;
}
