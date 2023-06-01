export default {
    title: 'Liquid test',
    component: 'liquid-test',
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




