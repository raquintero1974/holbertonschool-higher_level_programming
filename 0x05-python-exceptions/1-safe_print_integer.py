#!/usr/bin/python3
def safe_print_integer(value):
    """ Try to print an integer
    """
    try:
<<<<<<< HEAD
        print("{:d}".format(value))
        return True
    except (TypeError, ValueError):
=======
        print"{:d}".format(value))
    except (ValueError, TypeError):
>>>>>>> 05f68b5b721da9886957b2b4843196bc4901adad
        return False
    else:
        return True
