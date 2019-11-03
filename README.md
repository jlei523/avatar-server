This is a modified version of gkoberger's avataaars server: https://github.com/gkoberger/avataaars

**Changes**

* Added endpoint to generate random avatars
* Random avatars are optimized. IE. Girls won't have beards. Hair and beard colors are more likely to match.
* Added support for different background colors
* Only supports SVGs, no PNGs.


See the sign up folow on [Medtally.com](https://medtally.com) and [getavatars.app](https://getavatars.app for examples.


===========

This renders [Avataaars](https://github.com/fangpenlin/avataaars) in a way that can be embedded!

Here's some example URLs:
```
    https://localhost:3006/svg/20 //generates 20 random avatar SVGs
    https://localhost:3006/?hairColor=BrownDark&clotheType=Hoodie&avatarStyle=Circle
    https://localhost:3006/?accessoriesType=Prescription01&avatarStyle=Circle&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=UnibrowNatural&facialHairType=BeardLight&hairColor=Black&mouthType=Eating&skinColor=Yellow&topType=LongHairShavedSides
    https://localhost:3006/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=Black&clotheType=GraphicShirt&eyeType=Close&eyebrowType=Default&facialHairColor=BlondeGolden&facialHairType=Blank&hairColor=PastelPink&mouthType=Sad&skinColor=Tanned&topType=Hat```
