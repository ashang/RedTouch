Ext.define('Redtouch.model.Issue', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'created_on', type: 'auto'},
            {name: 'done_ratio', type: 'auto'},
            {name: 'start_date', type: 'auto'},
            {name: 'due_date', type: 'auto'},
            {name: 'description', type: 'auto'},
            {name: 'subject', type: 'auto'},
            {name: 'updated_on', type: 'auto'},
            {
                name: 'status',
                convert: function(value, record) {
                    return value['name'];
                }
            },
            {
                name: 'project',
                convert: function(value, record) {
                    return value['name'];
                }
            },
            {
                name: 'tracker',
                convert: function(value, record) {
                    return value['name'];
                }
            },
            {
                name: 'author',
                convert: function(value, record) {
                    return value['name'];
                }
            },
            {
                name: 'priority',
                convert: function(value, record) {
                    return value['name'];
                }
            },
            {
                name: 'assigned_to',
                convert: function(value, record) {
					if (value != null)
						return value['name'];
					return null;
                }
            }
        ],
        proxy: {
            type: 'ajax',
            url: '/redmine/issues.json',
            reader: {
                type: 'json',
                rootProperty: 'issues'
            }
        }
    }
});