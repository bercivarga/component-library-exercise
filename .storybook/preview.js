import {addDecorator} from "@storybook/react";
import {withContexts} from "@storybook/addon-contexts/react";
import {contexts} from "./contexts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
    backgrounds: {
        default: 'default',
        values: [
            {
                name: 'default',
                value: '#ffffff'
            },
            {
                name: 'dark',
                value: '#050449'
            },
        ],
    },
}

addDecorator(withContexts(contexts))