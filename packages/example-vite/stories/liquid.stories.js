import test from './liquid-test.liquid'
import test2 from './liquid-test2.liquid'

export default {
    title: 'Liquid test',
    component: test,
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


export const Sample2 = (args) => {
    return {
        component: test2,
        args
    }
};


export const Sample3 = (args) => {
    return {
        component: `<div style="background: red;">${test2}</div>`,
        args: {
            label: 'BUM'
        }
    }
};


