import template from './frontpage.liquid'

export default {
    title: 'Pages/Frontpage',
    component: template,
    argTypes: {
        label: {
            control: 'text',
            description: 'Button label',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: 'string',
                    // detail: 'type detail',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};

export const Sample = {
    args: {
      label: 'Button',
    }
  };




