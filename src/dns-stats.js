const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,domainsRev
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	const result = {};
	const domainsRev = domains.map(domain => {
		return domain.split('.').reverse();
	});
	domainsRev.forEach(domain => {
    let dns = '';
		domain.forEach(sub => {
			dns += `.${sub}`;
			result[dns] = result[dns] ? result[dns] + 1 : 1;
		});
	});
	return result;
}

module.exports = {
  getDNSStats
};
