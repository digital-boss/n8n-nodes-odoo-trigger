import { ICredentialType, NodePropertyTypes } from 'n8n-workflow';

export class OdooApi implements ICredentialType {
	name = 'odooApi';
	displayName = 'Odoo API';
	documentationUrl = 'odoo';
	properties = [
		{
			displayName: 'Site url',
			name: 'url',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Password Or API Key',
			name: 'password',
			type: 'string' as NodePropertyTypes,
			default: '',
			typeOptions: {
				password: true,
			},
		},
		{
			displayName: 'Database name',
			name: 'db',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
