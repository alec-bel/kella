# from PIL import Image

# def slice_image(input_path, output_prefix):
#     # Open the input image
#     img = Image.open(input_path)

#     # Get the width and height of the image
#     width, height = img.size

#     # Calculate the coordinates for the slices (assuming we divide into 4 equal parts)
#     middle_x = width // 2
#     middle_y = height // 2

#     # Define the four slices (coordinates are in (left, upper, right, lower) format)
#     slices = [
#         (0, 0, middle_x, middle_y),  # Top-left
#         (middle_x, 0, width, middle_y),  # Top-right
#         (0, middle_y, middle_x, height),  # Bottom-left
#         (middle_x, middle_y, width, height)  # Bottom-right
#     ]

#     # Loop through the slices and save them as separate images
#     for i, coords in enumerate(slices):
#         # Crop the image to the slice
#         sliced_img = img.crop(coords)
#         # Save the sliced image
#         output_path = f"{output_prefix}_slice_{i + 1}.jpeg"
#         sliced_img.save(output_path)
#         print(f"Saved: {output_path}")

# # Example usage:
# input_image_path = '../images/mt-hood-wilderness.jpeg'  # Replace with your input image path
# output_file_prefix = 'mt-hood-wilderness'  # Prefix for output files
# slice_image(input_image_path, output_file_prefix)


from PIL import Image

def slice_image(input_path, output_prefix, rows, cols):
    # Open the input image
    img = Image.open(input_path)

    # Get the width and height of the image
    width, height = img.size

    # Calculate the width and height of each slice
    slice_width = width // cols
    slice_height = height // rows

    # List to hold the slices
    slices = []

    # Generate the coordinates for each slice
    for row in range(rows):
        for col in range(cols):
            # Calculate the (left, upper, right, lower) coordinates for the slice
            left = col * slice_width
            upper = row * slice_height
            right = left + slice_width
            lower = upper + slice_height

            # Ensure the last row/column fits the image dimensions correctly
            if col == cols - 1:  # Rightmost column
                right = width
            if row == rows - 1:  # Bottommost row
                lower = height

            # Crop the image to the current slice
            sliced_img = img.crop((left, upper, right, lower))
            slices.append(sliced_img)

            # Save the slice
            output_path = f"{output_prefix}-slice-{row + 1}-{col + 1}.png"
            sliced_img.save(output_path)
            print(f"Saved: {output_path}")

# Example usage:
input_image_path = 'DSC_1090.png'  # Replace with your input image path
output_file_prefix = 'cascade-canyon-grand-teton'  # Prefix for output files
rows = 2  # Specify number of rows for slicing
cols = 1  # Specify number of columns for slicing
slice_image(input_image_path, output_file_prefix, rows, cols)

