import * as React from "react";
import { View } from "react-native";
import Animated, {
    FadeInUp,
    FadeOutDown,
    LayoutAnimationConfig,
} from "react-native-reanimated";
import { Info } from "~/lib/icons/Info";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Text } from "~/components/ui/text";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "~/components/ui/tooltip";

const GITHUB_AVATAR_URI =
    "https://avatars.githubusercontent.com/u/13638285?s=400&u=10d87978fe7abfca24570d36826543a94cad86e8&v=4";

export default function Screen() {
    const [progress, setProgress] = React.useState(85);

    function updateProgressValue() {
        setProgress(Math.floor(Math.random() * 100));
    }
    return (
        <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
            <Card className="w-full max-w-sm p-6 rounded-xl">
                <CardHeader className="items-center">
                    <Avatar alt="Elias C. Mamalias" className="w-24 h-24">
                        <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
                        <AvatarFallback>
                            <Text>EM</Text>
                        </AvatarFallback>
                    </Avatar>
                    <View className="p-3" />
                    <CardTitle className="pb-2 text-center">
                        Elias Mamalias Jr
                    </CardTitle>
                    <View className="flex-row">
                        <CardDescription className="text-base font-semibold">
                            Software Developer
                        </CardDescription>
                        <Tooltip delayDuration={150}>
                            <TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
                                <Info
                                    size={14}
                                    strokeWidth={2.5}
                                    className="w-4 h-4 text-foreground/70"
                                />
                            </TooltipTrigger>
                            <TooltipContent className="py-2 px-4 shadow">
                                <Text className="native:text-lg">
                                    Freelance
                                </Text>
                            </TooltipContent>
                        </Tooltip>
                    </View>
                </CardHeader>
                <CardContent>
                    <View className="flex-row justify-around gap-3">
                        <View className="items-center">
                            <Text className="text-sm text-muted-foreground">
                                Nationality
                            </Text>
                            <Text className="text-xl font-semibold">Filipino</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-sm text-muted-foreground">
                                Age
                            </Text>
                            <Text className="text-xl font-semibold">
                                32
                            </Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-sm text-muted-foreground">
                                Species
                            </Text>
                            <Text className="text-xl font-semibold">Human</Text>
                        </View>
                    </View>
                </CardContent>
                <CardFooter className="flex-col gap-3 pb-0">
                    <View className="flex-row items-center overflow-hidden">
                        <Text className="text-sm text-muted-foreground">
                            Productivity:
                        </Text>
                        <LayoutAnimationConfig skipEntering>
                            <Animated.View
                                key={progress}
                                entering={FadeInUp}
                                exiting={FadeOutDown}
                                className="w-11 items-center"
                            >
                                <Text className="text-sm font-bold text-green-600">
                                    {progress}%
                                </Text>
                            </Animated.View>
                        </LayoutAnimationConfig>
                    </View>
                    <Progress
                        value={progress}
                        className="h-2"
                        indicatorClassName="bg-green-600"
                    />
                    <View />
                    <Button
                        className="shadow shadow-foreground/5"
                        onPress={updateProgressValue}
                    >
                        <Text>Contact</Text>
                    </Button>
                </CardFooter>
            </Card>
        </View>
    );
}
