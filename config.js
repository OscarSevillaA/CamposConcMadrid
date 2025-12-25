var config = {
    style: 'mapbox://styles/oscarse/cmjkbacu700al01sb03lx1opl',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoib3NjYXJzZSIsImEiOiJjbWo1NmxkZGkxYmgyM2dzNDdyZm00OTA5In0.7G2z6bAJ77ikuMMJq7RxLA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Campos de concentración franquistas en la provincia de Madrid',
    subtitle: 'Una historia casi desconocida',
    byline: ' La mayoría de nosotros no conoce que en España el fascismo franquista estableció al menos unos 300 campos de concentración por todo el país. Aquí mostramos los de la provincia de Madrid.',
    footer: 'Source: https://www.loscamposdeconcentraciondefranco.es/ <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: 'Guadarrama',
            image: '',
            description: 'Campo, aparentemente, provisional. Ubicación desconocida. Llegó a albergar a 6.500 prisioneros en abril de 1939.',
            location: {
                center: [-4.09045, 40.67366],
                zoom: 9.75,
                pitch: 65.50,
                bearing: 68.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: 'El Pardo',
            image: '',
            description: 'Campo, aparentemente, provisional. Ubicación desconocida. Oficialmente congregó a 9.000 prisioneros. Operó, al menos, durante abril de 1939.',
            location: {
                center: [-3.77595, 40.51900],
                zoom: 11.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'left',
            hidden: false,
            title: 'Alcalá de Henares',
            image: './assets/03-Alcalá2.jpg',
            description: 'Campo estable. Ubicado en el manicomio. Llegó a reunir a más de 3.700 prisioneros. Operó entre el 31 de marzo de 1939 y diciembre de ese año en que pasó a ser considerado prisión. Sus edificaciones forman hoy parte del Acuartelamiento Primo de Rivera.',
            location: {
                center: [-3.35625, 40.50192],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'fully',
            hidden: false,
            title: 'Estadio Santiago Bernabéu',
            image: './assets/04-Chamartin.jpg',
            description: 'Campo provisional. Ubicado en el campo de fútbol del Viejo Chamartín, donde jugaba el Real Madrid. En él llegaron a hacinarse entre 15.000 y 20.000 prisioneros. Operó, al menos, durante abril de 1939. Su lugar lo ocupa hoy el estadio Santiago Bernabéu.',
            location: {
                center: [-3.68836, 40.45305],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: 'Estadio Metropolitano',
            image: './assets/05-Metropolitano.jpg',
            description: 'Campo provisional. Ubicado en el campo de fútbol del Athletic Club de Madrid. Lo custodiaba el Batallón Cruces Negras de la Victoria de la Falange. Operó, al menos, durante abril de 1939. El lugar en que se levantaba lo ocupa hoy la Plaza de la Ciudad de Viena.',
            location: {
                center: [-3.71667, 40.44769],
                zoom: 12.75,
                pitch: 65.50,
                bearing: 68.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: 'Plaza de toros Las Ventas',
            image: './assets/06-LasVentas2.jpg',
            description: 'Campo provisional. Operó durante abril de 1939.',
            location: {
                center: [-3.66329, 40.43212],
                zoom: 11.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'left',
            hidden: false,
            title: 'Retamares. Pozuelo de Alarcón',
            image: '',
            description: 'Campo, aparentemente, provisional. Ubicación desconocida. Llegó a reunir 6.500 prisioneros. Operó, al menos, durante abril de 1939.',
            location: {
                center: [-3.81455, 40.43564],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'fully',
            hidden: false,
            title: 'Cuarteles Campamento',
            image: '',
            description: 'Campo, aparentemente, provisional. Ubicado en los acuartelamientos militares de Campamento, que en aquella época pertenecían al municipio de Carabanchel Bajo. El recinto estaba emplazado en el cruce de la Avenida de los Poblados con el Paseo de Extremadura. En él se confinó a más de 5.000 prisioneros. Solo se conserva documentación del mes de abril de 1939. Sin embargo, según dejó constancia Mila Gutiérrez en su libro "Hija de la guerra civil", el campo estuvo operativo durante más de un año.',
            location: {
                center: [-3.78387, 40.38746],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'left',
            hidden: false,
            title: 'Plaza de toros Vistalegre',
            image: './assets/09-Vistalegre Carabanchel Bajo.jpg',
            description: 'Campo provisional. Ubicado en la plaza de toros. Operó, al menos, durante abril de 1939. El edificio, tras numerosas remodelaciones, sigue albergando todo tipo de eventos.',
            location: {
                center: [-3.73907, 40.38628],
                zoom: 9.75,
                pitch: 65.50,
                bearing: 68.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '10',
            alignment: 'right',
            hidden: false,
            title: 'Grupo Escolar Miguel de Unamuno',
            image: './assets/10-Unamuno.jpg',
            description: 'Campo de larga duración. Además de la labor puramente represiva, fue uno de los lugares en los que se constituían los Batallones de Trabajadores y los Batallones Disciplinarios de Soldados Trabajadores. Operó desde, al menos, junio de 1939 hasta diciembre de 1942. Hoy el edificio mantiene su nombre y la función educativa infantil para la que fue construido. Calle Alicante, 5 28045 Madrid.',
            location: {
                center: [-3.69321, 40.39430],
                zoom: 11.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            alignment: 'left',
            hidden: false,
            title: 'Estadio Rayo Vallecano',
            image: './assets/11-Vallecas.jpg',
            description: 'Campo provisional. Ubicado en el Estadio del Puente de Vallecas. Empezó a funcionar el 1 de abril de 1939 y el día 4 ya reunía a más de 9.500 prisioneros. Operó, al menos, durante abril de 1939. En su emplazamiento se levanta hoy el campo del Rayo Vallecano.',
            location: {
                center: [-3.61284, 40.37683],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12',
            alignment: 'fully',
            hidden: false,
            title: 'Rivas del Jarama',
            image: '',
            description: 'Campo, aparentemente, provisional. Ubicación desconocida. Se abrió el 1 de abril de 1939 y el día 4 ya tenía más de 3.000 prisioneros. Operó, al menos, durante abril de 1939.',
            location: {
                center: [-3.52284, 40.38099],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13',
            alignment: 'left',
            hidden: false,
            title: 'Leganés',
            image: '',
            description: 'Campo, aparentemente provisional. Ubicación desconocida, aunque testimonios orales lo sitúan en el antiguo cuartel Saboya, más conocido como Sabatini, y en el campo de fútbol. Los documentos oficiales solo nos indican que reunió a 2.000 prisioneros. Operó, al menos, durante abril de 1939.',
            location: {
                center: [-3.76658, 40.32873],
                zoom: 12.75,
                pitch: 65.50,
                bearing: 68.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '14',
            alignment: 'right',
            hidden: false,
            title: 'Pinto',
            image: '',
            description: 'Campo aparentemente provisional. La única información de que disponemos es que el I Cuerpo de Ejército se hizo cargo de su vigilancia y gestión el 31 de marzo de 1939.',
            location: {
                center: [-3.69998, 40.24206],
                zoom: 11.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15',
            alignment: 'left',
            hidden: false,
            title: 'Perales-Chinchón-Tielmes',
            image: '',
            description: 'Campo, aparentemente, provisional. Ubicación desconocida. Se trataba de tres campos, separados por solo 18 kilómetros, que reunieron a cerca de 3.500 prisioneros y que funcionaron como una única unidad administrativa. Operó, al menos, durante abril de 1939.',
            location: {
                center: [-3.39020, 40.21104],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16',
            alignment: 'fully',
            hidden: false,
            title: 'Convento San Pascual en Aranjuez',
            image: '',
            description: 'Campo estable. Ubicado en el Convento de San Pascual. Operó desde el 31 de marzo de 1939 hasta, al menos, febrero de 1940, aunque desde mediados de julio del 39 fue rebautizado como «prisión provisional». Hoy sigue siendo un edificio religioso y un colegio.',
            location: {
                center: [-3.60284, 40.03122],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
