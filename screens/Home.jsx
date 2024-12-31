import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ImageBackground, StatusBar, RefreshControl, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import movies from '../components/moviesData'; // Import the movie data

export default function Home({ navigation }) {
    const [refreshing, setRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const [filteredMovies, setFilteredMovies] = useState(movies); // State for filtered movies

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        // Simulate a refresh with dummy data
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredMovies(movies); // Show all movies if search is empty
        } else {
            const filtered = movies.filter((movie) =>
                movie.movieTitle.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredMovies(filtered);
        }
    };

    const renderStars = (rating) => {
        const totalStars = 5;
        const clampedRating = Math.min(Math.max(rating, 0), totalStars);
        const fullStars = Math.floor(clampedRating);
        const hasHalfStar = clampedRating % 1 >= 0.5;
        const emptyStars = totalStars - Math.ceil(clampedRating);

        let stars = [];
        for (let i = 0; i < fullStars; i++) stars.push('★');
        if (hasHalfStar) stars.push('☆');
        for (let i = 0; i < emptyStars; i++) stars.push('☆');

        return stars.join('');
    };

    return (
        <View style={styles.homeContainer}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ0PDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDysZFRkrKystNysrKy03LS0tLSsrKy0rNy0rNys3KystKysrKysrKy0rKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAaAAEBAQADAQAAAAAAAAAAAAABAAIDBQYE/8QAGBABAQEBAQAAAAAAAAAAAAAAAAER8DH/xAAaAQEBAQEBAQEAAAAAAAAAAAABAAIDBAUG/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBAhL/2gAMAwEAAhEDEQA/APBIJ9x+dKCGlJJlBKhnSqEKCKzTWay1irNNZtDWCs02s0N4zWa1Wam8YrNarNTWCstVlNis0hNYyDQGhQQjgSQ10xJKBspIFJAp6QDU9r4RQQ1HQtDKOhC1nSgtZBhrNVoo1rBWaazWWsFZprNDeCs01mprBWK1Wam8FZpoqawVmmiprBQayGhUqE1iQI1rECKHQ6WVEikEXokyte18NpM6NGmNatZWsqHRotGsmGi0WgGG1m1Ws0NZh1m1M0RrMVZprNDWC1mq0BvBWabWU1irJrKaxClmprACARQaE0EkmsSqTLWakkmlqCSegWsrXtfHh1azq1nVGtGjWdBjWgaLWVDqtZ0WhqGijRoMNrNVrNoazFWbTaxaGsxCqs2hrFazTQm8AVCKrNNCawAhEUEUFAigogrWgUg2Ekk7vVrOjXrr5Ua1azq0KNaLRo0GNaNGjWVDaFo1GLRaNGhqG0WgWgxWs2q0UNZitZtVooaxUIVNKhBFVmmhFMlIgGgFAigpJLWsSSDWHvAki7bVrOrXor5sa1azo1VRrVrOrQo0tY0aDGtGjRophtFo1aDFotATUNrK0AoIIoFlNIVUIoJIoHQCEkihSAkRCtaCKDYRSTsNWsatdq8Eb1axq0VRrVrOrVTGtGjRoqjWgJGG0BaFEFoRQtQRVCSIoITQRCIRxYDGUcWIxlVrBgMCw4sTWYg1iwNRnCUjAiko+nVrOrW68Ua1azq0KNLWdWqqNatZ1alGtGs6kYbVoBR1BIxJINZyFYcOKtZyxhxrFgrecM4MbxYK3nLODG8WKnyxgxyYMFPljBjeLFV5YxNioxnDhSMGLEkokki1q0I14YdWhaqo1o0ako0tZJR1BJQpYlTmIoit5ypESq6Zyzhw4RXTOWcOHDgrWcsrGsWKtZyxixvFgp8sYMbxYqfLjxY3YMVHljFjeDFV5YxY0sVXlnFjWLEozhIVUcaZWmvA1q0alVCWdOmo6gSoTAYqcwmAwV0zkwxQit5ixEyCumYJDhMVbzkYcJxmumcs4saQrWcs4sbwYq15ZwY3gxDyxYMbwVVRmwY3gw0RjFjVgQjOLGghBgaSUfMlqL5qSSRQJRMZhRzGoRDIq3hjUZjUVdMwxoKBvMLQhkDpmGFNQOmYMakUhkDpmLFhWJvORiaxYGvLCxqwWFeWcGNVJnccdgbsFLO4wjgTMGDGkhGcRSUfGgmny2kkgiEkYYkW8ajUSDeGRoIN4Y0km8ahiQdcahiSdMahKDrypDiQbw4sCDasCSAsZSLIFSLOis0osMpJMrUkk//Z' }}
                resizeMode="cover"
                style={styles.imageBG}
            >
                {/* Search Bar */}
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search Movies..."
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />

                {filteredMovies.length > 0 ? (
                    <FlatList
                        contentContainerStyle={styles.listContainer}
                        data={filteredMovies}
                        keyExtractor={(item) => item.movieID}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('Details', item)} style={styles.movieContainer}>
                                <Image
                                    source={{ uri: item.moviePoster }}
                                    style={styles.moviePoster}
                                />
                                <View style={styles.movieInfoContainer}>
                                    <Text style={styles.movieTitle}>{item.movieTitle}</Text>
                                    <View style={styles.starRatingContainer}>
                                        <Text style={styles.starRating}>{renderStars(item.movieRating)}</Text>
                                    </View>
                                    <Text style={styles.movieYear}>{`Year: ${item.movieYear}`}</Text>

                                    {/* Create Review Button */}
                                    <TouchableOpacity
                                        style={styles.reviewButton}
                                        onPress={() => navigation.navigate('Details', item)}
                                    >
                                        <Text style={styles.reviewButtonText}>Create Review</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="white" color="white" />}
                    />
                ) : (
                    <View style={styles.noMoviesContainer}>
                        <Text style={styles.noMoviesText}>Sorry, the movie is not available right now.</Text>
                    </View>
                )}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: { flex: 1, backgroundColor: '#020726' },
    imageBG: { flex: 1 },
    searchBar: {
        height: 50,
        margin: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(163, 129, 129, 0.27)',
        color: '#fff',
        fontSize: 16,
    },
    listContainer: { marginTop: 10, alignItems: 'center' },
    movieContainer: {
        width: '90%',
        marginBottom: 20,
        backgroundColor: 'rgb(10, 13, 24)',
        borderRadius: 15,
        overflow: 'hidden',
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#fff',
        flexDirection: 'row',
        padding: 10,
    },
    moviePoster: { width: 100, height: 150, borderRadius: 10, resizeMode: 'cover', marginRight: 20 },
    movieInfoContainer: { flex: 1, justifyContent: 'center' },
    movieTitle: { fontSize: 18, color: '#fff', fontWeight: 'bold', marginBottom: 5 },
    starRatingContainer: { flexDirection: 'row', marginBottom: 3 },
    starRating: { fontSize: 18, color: '#FFD700' },
    movieYear: { fontSize: 14, color: 'rgb(209, 209, 209)' },
    noMoviesContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
    noMoviesText: { fontSize: 18, color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', paddingHorizontal: 20 },

    // Style for the Review Button
    reviewButton: {
        marginTop: 10,
        paddingVertical: 8,
        backgroundColor: '#FFD700',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    reviewButtonText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
});
