import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class OdooApi implements ICredentialType {
	name = 'odooApi';
	displayName = 'Odoo API';
	// documentationUrl = 'odoo';
	properties: INodeProperties[] = [
		{
			displayName: 'Site url',
			name: 'url',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Password Or API Key',
			name: 'password',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
		},
		{
			displayName: 'Database name',
			name: 'db',
			type: 'string',
			default: '',
		},
	];
}
