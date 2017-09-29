var _ = require('lodash');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'))
var parseString = require('xml2js').parseString;

async function main() {
  let xml = (await fs.readFileAsync(process.argv[2])).toString("utf-8");
  let result = await Promise.fromNode((callback) => parseString(xml, callback));
  let items = result.rdataset.rdata;

  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    let z = {
      type: item.type[0],
      name: item.host[0],
      content: item.rd_data[0],
      ttl: item.rdata_ttl[0],
      priority: item.rr_pref[0] != 'N/A' ? item.rr_pref[0] : undefined,
      proxied: false,
    };
    console.log([z.name, z.ttl, 'IN', z.type, z.content].join('\t'));
  }
}


main().catch((e) => {
  console.error(e)
})