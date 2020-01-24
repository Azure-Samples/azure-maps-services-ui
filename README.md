---
topic: sample
description: A set of web UI controls that wrap the Azure Maps REST services. 
languages:
- javascript
- typescript
products:
- azure
- azure-maps
---

**Project Status:** Initial development in progress

# Azure Maps Services UI module

This project provides a set of web UI controls that wrap the Azure Maps REST services. These controls are both accessible and customizable. 
Many of these controls can be used directly with the raw responses from the REST services, while add functionality on top of the Azure Maps Web SDK. 

## Features

- Route service controls
    - [Route instructions control](docs/RouteInstructionControl.md) - generate nicely formatted instructions.
- Accessibile:
    - Multi-input support: mouse, keyboard, touch
    - High contrast support
    - Screen reader support (aria labels)
    - Color contrast 4.5:1 support for built-in styles
    - Handles up to 400% zoom

## Getting started

Download the project and copy the `atlas-services-ui` JavaScript and CSS files from the `dist` folder into your project. 

See the [documentation](docs) for more details on a specific feature.

## Roadmap

- Search bar with autocomplete option
- Route UI manager that manages rendering of routes on a map and coordinates interactions with the route instructions control. 
- Route input control that provides a user input form for calculating routes.
- Print route dialog that connects to the route manager and captures map screen shots as well as instrucitons, but little else. 
- Route range control
- Mobility/Transit routing controls
- Weather service controls 

## Related Projects

* [Azure Maps Web SDK Samples](https://github.com/Azure-Samples/AzureMapsCodeSamples)
* [Azure Maps Gov Cloud Web SDK Samples](https://github.com/Azure-Samples/AzureMapsGovCloudCodeSamples)
* [Azure Maps & Azure Active Directory Samples](https://github.com/Azure-Samples/Azure-Maps-AzureAD-Samples)

## Additional Resources

* [Azure Maps (main site)](https://azure.com/maps)
* [Azure Maps Documentation](https://docs.microsoft.com/azure/azure-maps/index)
* [Azure Maps Blog](https://azure.microsoft.com/blog/topics/azure-maps/)
* [MSDN Forums](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azurelbs)
* [StackOverflow [azure-maps]](https://stackoverflow.com/questions/tagged/azure-maps)
* [Azure Maps feedback](https://feedback.azure.com/forums/909172-azure-maps)

## Contributing

We welcome contributions. Feel free to submit code samples, file issues and pull requests on the repo and we'll address them as we can. 
Learn more about how you can help on our [Contribution Rules & Guidelines](CONTRIBUTING.md). 

You can reach out to us anytime with questions and suggestions using our communities below:
* [MSDN Forums](https://social.msdn.microsoft.com/Forums/home?forum=azurelbs)
* [StackOverflow [azure-maps]](https://stackoverflow.com/questions/tagged/azure-maps)
* [Azure Maps feedback](https://feedback.azure.com/forums/909172-azure-maps)

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). 
For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or 
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## License

MIT
 
See [License](LICENSE.md) for full license text.