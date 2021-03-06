import { debug, warning, getInput, getBooleanInput, startGroup, endGroup } from '@actions/core';
import axios from 'axios';
import { Response } from './types';
import { inspect } from 'util';

async function run(): Promise<void> {

  try {

    const token = getInput('api_token');

    debug(`Token: '${token}'`);

    const domain = getInput('domain');

    debug(`Domain: '${domain}'`);

    const development = getBooleanInput('development_mode');

    debug(`Development mode: ${development}`);

    const headers = {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`};

    const zonesResponse = (await axios.get<Response>('https://api.cloudflare.com/client/v4/zones', {params: {name: domain}, headers})).data;

    if (!zonesResponse.success || zonesResponse.result_info.count !== 1) {

      startGroup('Zones Response');

      warning(inspect(zonesResponse));

      endGroup();

      warning('Could not get the zone id.');

      return;
    };

    const id = zonesResponse.result.pop()?.id;

    debug(`Zone id: ${id}`);

    const purgeResponse = (await axios.post<Response>(`https://api.cloudflare.com/client/v4/zones/${id}/purge_cache`, {purge_everything: true}, {headers})).data;

    if (!purgeResponse.success) warning('Could not Purge the Cache.');

    const settingsResponse = (await axios.patch<Response>(`https://api.cloudflare.com/client/v4/zones/${id}/settings/development_mode`, {value: "on"}, {headers})).data;

    if (!settingsResponse.success) warning('Could not enable the Development Mode.');

  } catch (error) {

    startGroup('Error');

    debug(inspect(error));

    endGroup();

    if (error instanceof Error) warning(error.message);
  }
}

run();
