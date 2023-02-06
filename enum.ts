enum StatusCode {
	SUCCESS = 1,
	IN_PROCESS = 'd',
	FAILED = 2,
}

const res2 = {
	message: 'Платеж успешен',
	statusCode: StatusCode.SUCCESS,
};

if (res2.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS); // Можно вызвать функцию так
