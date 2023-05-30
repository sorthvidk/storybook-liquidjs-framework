import test from './liquid-test.liquid'

export default {
    title: 'Liquid',
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

export const Sample = (args) => {
    console.log(args);
    return {
        template: test,
        args,
        data: {
            label: 'Hello you',
        }
    }
};


