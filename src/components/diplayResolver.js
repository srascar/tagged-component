function modifierResolver(modifierDefinitions, modifiers) {
  return modifiers.reduce((acc, current) => {
    for (const key in modifierDefinitions) {
      const isValid =
        (key.charAt(0) === "/" &&
          current.match(new RegExp(key.slice(1, -1)))) ||
        current === key;

      if (isValid) {
        acc = {
          ...acc,
          ...(typeof modifierDefinitions[key] === "function"
            ? modifierDefinitions[key](current)
            : modifierDefinitions[key])
        };
      }
    }

    return acc;
  }, {});
}

export function displayResolver(
  componentDefinitions,
  modifierDefinitions,
  display
) {
  const items = display ? display.split(",").map(d => d.trim()) : [];
  let componentKey = "default";
  for (var componentIndex of Object.keys(componentDefinitions)) {
    if (items.includes(componentIndex)) {
      componentKey = componentIndex;
      items.splice(items.indexOf(componentIndex), 1);
      break;
    }
  }

  return {
    Component: componentDefinitions[componentKey],
    config: modifierResolver(modifierDefinitions, items)
  };
}
