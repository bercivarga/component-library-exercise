import {addDecorator} from "@storybook/react";
import {withContexts} from "@storybook/addon-contexts/react";
import {contexts} from "./contexts";
import {withKnobs} from "@storybook/addon-knobs";
import {withA11y} from "@storybook/addon-a11y";

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
addDecorator(withKnobs)
addDecorator(withA11y)