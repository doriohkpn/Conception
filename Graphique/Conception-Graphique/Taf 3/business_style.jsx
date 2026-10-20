// Script Photoshop JSX - Style "BUSINESS"
#target photoshop

// Nouvelle doc
var doc = app.documents.add(1080, 1080, 72, "BUSINESS Style", NewDocumentMode.RGB);

// Couleur de fond bleu
var bgColor = new SolidColor();
bgColor.rgb.red = 0;
bgColor.rgb.green = 80;
bgColor.rgb.blue = 160;
app.backgroundColor = bgColor;
doc.artLayers.add();

// Ajouter le texte
var textLayer = doc.artLayers.add();
textLayer.kind = LayerKind.TEXT;
textLayer.textItem.contents = "BUSINESS";
textLayer.textItem.position = [200, 540]; // position X, Y
textLayer.textItem.size = 130;
textLayer.textItem.font = "Impact"; // Utilise une police installée
textLayer.textItem.color = new SolidColor();
textLayer.textItem.color.rgb.red = 255;
textLayer.textItem.color.rgb.green = 255;
textLayer.textItem.color.rgb.blue = 255;

// Appliquer effets de style
var layer = textLayer;
var desc = new ActionDescriptor();
var ref = new ActionReference();
ref.putClass(stringIDToTypeID('layerSection'));
desc.putReference(charIDToTypeID('null'), ref);
executeAction(charIDToTypeID('Mk  '), desc, DialogModes.NO);

// Styles : Ombre portée + lueur + dégradé
layer.layerStyle.dropShadow.enabled = true;
layer.layerStyle.dropShadow.distance = 5;
layer.layerStyle.dropShadow.size = 7;
layer.layerStyle.dropShadow.color = new SolidColor();
layer.layerStyle.dropShadow.color.rgb.hexValue = '000000';
layer.layerStyle.dropShadow.opacity = 50;

layer.layerStyle.outerGlow.enabled = true;
layer.layerStyle.outerGlow.size = 25;
layer.layerStyle.outerGlow.color = new SolidColor();
layer.layerStyle.outerGlow.color.rgb.hexValue = 'FFFFFF';
layer.layerStyle.outerGlow.opacity = 40;

// Dégradé : blanc → bleu clair
var gradient = layer.layerStyle.gradientOverlay;
gradient.enabled = true;
gradient.opacity = 100;
gradient.angle = 90;
gradient.scale = 100;
gradient.gradient = app.gradients.add();
gradient.gradient.type = GradientType.LINEAR;
gradient.gradient.gradientStops.add();
gradient.gradient.gradientStops[0].color.rgb.hexValue = 'FFFFFF';
gradient.gradient.gradientStops[0].location = 0;
gradient.gradient.gradientStops.add();
gradient.gradient.gradientStops[1].color.rgb.hexValue = 'A9D1F7';
gradient.gradient.gradientStops[1].location = 100;
