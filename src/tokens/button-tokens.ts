import { cornerRadiusTokens } from "./corner-radius-tokens";
import { iconTokens } from "./icon-tokens";
import { sizeTokens } from "./size-tokens";
import { spacingTokens } from "./spacing-tokens";
import { strokeTokens } from "./stroke-tokens";

const buttonTokens = {
  button_small_corner_radius: cornerRadiusTokens.corner_radius_8,
  button_small_horizontal_padding: spacingTokens.spacing_16,
  button_small_gap: spacingTokens.spacing_8,
  button_small_height: sizeTokens.size_32,
  button_small_leading_icon: iconTokens.icon_size_12,
  button_small_trailing_icon: iconTokens.icon_size_14,
  button_medium_corner_radius: cornerRadiusTokens.corner_radius_8,
  button_medium_horizontal_padding: spacingTokens.spacing_16,
  button_medium_gap: spacingTokens.spacing_8,
  button_medium_height: sizeTokens.size_40,
  button_medium_leading_icon: iconTokens.icon_size_16,
  button_medium_trailing_icon: iconTokens.icon_size_16,
  button_medium_stroke: strokeTokens.stroke_none,
  button_large_corner_radius: cornerRadiusTokens.corner_radius_8,
  button_large_horizontal_padding: spacingTokens.spacing_16,
  button_large_gap: spacingTokens.spacing_8,
  button_large_height: sizeTokens.size_48,
  button_large_leading_icon: iconTokens.icon_size_20,
  button_large_trailing_icon: iconTokens.icon_size_20,
  button_large_stroke: strokeTokens.stroke_none,
};

export { buttonTokens };
